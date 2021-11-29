<template>
	<div class="app-main-layout">

		<Header @click="isOpen = !isOpen"/>
		<SideBar v-model="isOpen"/>

		<main class="app-content" :class="{full: !isOpen}">
			<div class="app-page">
				<router-view />
			</div>
		</main>

		<div class="fixed-action-btn">
			<router-link class="btn-floating btn-large blue" to="/record">
				<i class="large material-icons">add</i>
			</router-link>
		</div>

		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Footer from "@/components/Footer";

export default {
	name: "main-layout",
	data: () => ({
		isOpen: true
	}),
	components: {
		Header,
		SideBar,
		Footer
	}
}
</script>