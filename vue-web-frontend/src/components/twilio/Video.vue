<template>
    <video ref='video'>
</template>
<script>
const Video = require('twilio-video')
export default {
    props: ['track','enabled'],
    watch: {
        enabled(val) {
            if(val) {
                attachTrack()
            }
            else {
                removeTrack()
            }
        }
    },
    methods: {
        attachTrack() {
            this.track.attach(this.$refs.video)
        },
        removeTrack() {
            this.track.detach(this.$refs.video)
        }
    }
}
</script>