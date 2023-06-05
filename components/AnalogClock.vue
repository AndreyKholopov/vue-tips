<template>
  <div ref="clock" class="clock">
    <svg ref="clockFace" class="clock-face">
      <use xlink:href="../assets/analogClock.svg#clockFace"></use>
    </svg>
    <div class="hour">
      <div class="hr" ref="hr"></div>
    </div>
    <div class="min">
      <div class="mn" ref="mn"></div>
    </div>
    <div class="sec">
      <div class="sc" ref="sc"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "rgb(255, 255, 255)",
    },
    faceColor: {
      type: String,
      default: "rgb(0, 0, 0)",
    },
    width: {
      default: 350,
      type: Number,
    },
  },
  mounted() {
    // set real time
    setInterval(() => {
      let date = new Date()

      let hh = date.getHours() * 30
      let mm = date.getMinutes() * 6
      let ss = date.getSeconds() * 6

      this.$refs.hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
      this.$refs.mn.style.transform = `rotateZ(${mm}deg)`
      this.$refs.sc.style.transform = `rotateZ(${ss}deg)`
    })

    // set all colors
    this.$refs.clock.style.setProperty("--main-clock-color", `${this.color}`)
    this.$refs.clockFace.style.setProperty("--clock-face-color",`${this.faceColor}`)

    // set width and height
    this.$refs.clock.style.setProperty("--clock-width-color", `${this.width}px`)
  },
}
</script>

<style scoped>
.clock {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  width: var(--clock-width-color);
  height: var(--clock-width-color);

  border: calc(var(--clock-width-color) * 0.057) solid var(--main-clock-color);
  border-radius: 50%;

  background: var(--main-clock-color);

  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.2),
    0 0 0 4px rgba(255, 255, 255, 1);
}

.clock::before {
  content: "";
  position: absolute;

  min-width: 7px;
  width: calc(var(--clock-width-color) * 0.043);
  min-height: 7px;
  height: calc(var(--clock-width-color) * 0.043);

  border: 2px solid #fff;
  border-radius: 50%;

  background: #848484;

  z-index: 10;
}

.clock-face {
  position: absolute;

  width: 95%;
  height: 95%;
}

.hour,
.min,
.sec {
  position: absolute;
}

.hour,
.hr {
  width: calc(var(--clock-width-color) * 0.457);
  height: calc(var(--clock-width-color) * 0.457);
}

.min,
.mn {
  width: calc(var(--clock-width-color) * 0.543);
  height: calc(var(--clock-width-color) * 0.543);
}

.sec,
.sc {
  width: calc(var(--clock-width-color) * 0.657);
  height: calc(var(--clock-width-color) * 0.657);
}

.hr,
.mn,
.sc {
  display: flex;
  justify-content: center;
  position: absolute;

  border-radius: 50%;
}

.hr::before {
  content: "";
  position: absolute;

  min-width: 4px;
  width: calc(var(--clock-width-color) * 0.023);
  height: calc(var(--clock-width-color) * 0.229);

  border-radius: 6px 6px 0 0;

  background: #848484;

  z-index: 5;
}

.mn::before {
  content: "";
  position: absolute;

  min-width: 2px;
  width: calc(var(--clock-width-color) * 0.011);
  height: calc(var(--clock-width-color) * 0.257);

  border-radius: 6px 6px 0 0;

  background: #d6d6d6;

  z-index: 6;
}

.sc::before {
  content: "";
  position: absolute;

  min-width: 1px;
  width: calc(var(--clock-width-color) * 0.006);
  height: calc(var(--clock-width-color) * 0.443);

  border-radius: 6px 6px 0 0;

  background: #ff6767;

  z-index: 7;
}
</style>
