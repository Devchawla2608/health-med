import AgoraRTC from "agora-rtc-sdk-ng";
import React, { useEffect } from 'react';

const VideoChat = () => {

  let rtc = {
    localAudioTrack: null,
    localVideoTrack: null,
    client: null,
  };
  // const { user } = useUserAuth();
  const user = { id: Math.floor(Math.random() * 100) };
  let options = {
    appId: "8c2c0bd2b2044aa1b866a62c82702778",
    channel: "TheraMed",
    token: "007eJxTYEiaI7KnYuGc2TbOTc8vqVUUT6rOP5VvJMNkK1a/5mV3d4oCg0WyUbJBUopRkpGBiUliomGShZlZoplRsoWRuYGRublFjvnS5IZARobwqbdYGRkgEMTnYAjJSC1K9E1NYWAAAH25H5I=",
    uid: user.id,
  };

  const handleJoin = async () => {
    console.log(rtc);
    await rtc.client.join(
      options.appId,
      options.channel,
      options.token,
      options.uid
    );
    rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
    const localPlayerContainer = document.createElement("div");
    const videoCallDiv = document.getElementById("video-call");
    videoCallDiv.appendChild(localPlayerContainer);
    localPlayerContainer.id = options.uid;
    // localPlayerContainer.textContent = "You ";
    localPlayerContainer.style.width = "30vw";
    localPlayerContainer.style.height = "30vw";
    localPlayerContainer.style.margin = "5vw 5vh";
    rtc.localVideoTrack.play(localPlayerContainer);
    console.log("publish success!");
  };

  const handleLeave = async () => {
    // rtc?.localAudioTrack?.close();
    // rtc?.localVideoTrack?.close();
    const playerContainerr = document.getElementById(user.id);
    console.log(playerContainerr);
    playerContainerr && playerContainerr.remove();
    rtc.client.remoteUsers.forEach((user1) => {
      const playerContainer = document.getElementById(user1.id);
      playerContainer && playerContainer.remove();
    });
    await rtc.client.leave();
    window.location.reload(false);
  };

  const temp = async () => {
    rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    rtc.client.on("user-published", async (user, mediaType) => {
      await rtc.client.subscribe(user, mediaType);
      console.log("subscribe success");
      if (mediaType === "video") {
        const remoteVideoTrack = user.videoTrack;
        const remotePlayerContainer = document.createElement("div");
        const videoCallDiv = document.getElementById("video-call");
        videoCallDiv.appendChild(remotePlayerContainer);
        console.log(user);
        remotePlayerContainer.id = user.uid.toString();
        // remotePlayerContainer.textContent =
        //   "Remote user " + user.displayName
        remotePlayerContainer.style.width = "30vw";
        remotePlayerContainer.style.height = "30vw";
        remotePlayerContainer.style.margin = "5vw 5vh";
        remoteVideoTrack.play(remotePlayerContainer);
      }
      if (mediaType === "audio") {
        const remoteAudioTrack = user.audioTrack;
        remoteAudioTrack.play();
      }
      rtc.client.on("user-unpublished", (user) => {
        const remotePlayerContainer = document.getElementById(user.uid.toString());
        remotePlayerContainer && remotePlayerContainer.remove();
      });
    });
  };

  useEffect(() => {
    temp();
    return handleLeave;
  }, []);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h2>Video Call Room</h2>
        <div className="row">
          <div className="video-calll">
            <button
              style={{
                margin: "0.5rem",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "green",
                color: "white",
                fontSize: "0.8rem",
              }}
              type="button"
              onClick={handleJoin}
            >
              JOIN CALL
            </button>
            <button
              style={{
                margin: "0.5rem",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "red",
                color: "white",
                fontSize: "0.8rem",
              }}
              type="button"
              onClick={handleLeave}
            >
              LEAVE CALL
            </button>
          </div>
          <div
            id="video-call"
            style={{
              paddingLeft: "46px",
              paddingRight: "41px",
              display: "flex",
              justifyContent: "space-between"
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
export default VideoChat
