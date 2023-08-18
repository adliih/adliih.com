<script>
	import '../app.css';
	import Sidebar from '../components/Sidebar.svelte';
</script>

<div class="flex min-h-screen p-12">
	<div class="w-1/2 md:w-1/4">
		<Sidebar />
	</div>
	<div class="p-4">
		<slot />
	</div>
</div>
