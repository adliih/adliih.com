<script>
	import '../app.css';
	import Sidebar from '$components/Sidebar.svelte';
</script>

<div class="flex flex-col lg:flex-row">
	<div class="sticky p-4 lg:h-screen lg:top-0 lg:left-0 flex-0 lg:w-72 lg:fixed">
		<Sidebar />
	</div>
	<div class="w-0 lg:flex-0 lg:w-72" />
	<div class="p-4 pt-0 mt-0 lg:pt-4 lg:ml-0 divider lg:divider-horizontal" />
	<div class="px-4 py-4 overflow-y-auto lg:py-12 lg:flex-1">
		<slot />
	</div>
</div>
