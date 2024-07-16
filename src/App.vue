<template>
  <div>
    <p>播放</p>
    <!-- <whep-video ref="video" muted autoplay></whep-video> -->
    <video  style="width: 800px;" id="video" muted autoplay controls></video>
  </div>
</template>
<script setup>

import { ref, onMounted } from 'vue'

let channelUrl = "http://192.168.2.15:8889/71021102b65e418dac73a86fd76a1a45_41/whep"
onMounted(() => {
  //video.value.setAttribute('src', `${channelUrl}/whep?url=Asahi&options=rtptransport%3dtcp%26timeout%3d60`);
  play();
});

import { WebRTCPlayer } from '@eyevinn/webrtc-player';
let play = async () => {
  const player = new WebRTCPlayer({
    video: video,
    type: 'whep',
    statsTypeFilter: '^candidate-*|^inbound-rtp'
  });
  await player.load(new URL(channelUrl));
  player.unmute();
  player.on('no-media', () => {
    console.log('media timeout occured');
  });
  player.on('media-recovered', () => {
    console.log('media recovered');
  });

  // Subscribe for RTC stats: `stats:${RTCStatsType}`
  // player.on('stats:inbound-rtp', (report) => {
  //   if (report.kind === 'video') {
  //     console.log(report);
  //   }
  // });
}
</script>