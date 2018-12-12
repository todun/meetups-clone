<template>
  <div class="home page">
    <home-header />
    <home-nav />
    <suggested /> <explore />
    <how-it-works />
    <get-app />
    <home-footer />
  </div>
</template>

<script>
import Header from "@/components/home/Header";
import Navigation from "@/components/home/Navigation";
import Suggested from "@/components/home/Suggested";
import Explore from "@/components/home/Explore";
import HowItWorks from "@/components/home/HowItWorks";
import GetApp from "@/components/home/GetApp";
import Footer from "@/components/home/Footer";

export default {
  components: {
    homeHeader: Header,
    homeNav: Navigation,
    suggested: Suggested,
    explore: Explore,
    howItWorks: HowItWorks,
    getApp: GetApp,
    homeFooter: Footer
  }
};
</script>
