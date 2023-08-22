<script lang="ts">
	import Education from '$components/Education.svelte';
	import Introduction from '$components/Introduction.svelte';
	import WorkExperience from '$components/WorkExperience.svelte';
	import Project from '$components/Project.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { experiences, educations, projects } = data;
</script>

<div class="flex flex-col gap-4">
	<Introduction />
	<div class="divider" />
	<WorkExperience {experiences} />
	<div class="divider" />
	<Education {educations} />
	<div class="divider" />
	<Project {projects} />
</div>
