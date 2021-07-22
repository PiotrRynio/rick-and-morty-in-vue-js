<template>
  <section class="messageHistorySection">

    <SectionTitle
        class="messageHistorySection__alert"
        :class="{'messageHistorySection__alert--shown': isAlertShown}"
        titleText="Message sent successfully"/>
    <SectionTitle class="messageHistorySection__title" titleText="Message history"/>

  </section>
</template>

<script>
import SectionTitle from "@/components/atoms/SectionTitle/SectionTitle";
import router from "@/router/router";

export default {
  name: "MessageHistorySection",
  components: {SectionTitle,},
  data() {
    return {
      isAlertShown: router.currentRoute.value.params.information === "success",
    }
  }
}
</script>

<style scoped lang="scss">
.messageHistorySection {
  display: flex;
  width: 100%;
  padding: 24px 20px 0;
  flex-flow: column nowrap;

  &__alert {
    display: none;
    margin-bottom: 24px;
    color: #50C878;
  }

  &__alert--shown {
    display: block;
  }

  &__title {
    margin-bottom: 32px;
  }

}
</style>