<script setup>

</script>


<template>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#jobOffCanvas" aria-controls="jobOffCanvas">
Post a Job
</button>

<div class="offcanvas offcanvas-start show" tabindex="-1" id="jobOffCanvas" aria-labelledby="jobOffCanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="jobOffCanvasLabel">Post a Job</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form>
        <label class="form-label" for="job-title">Job Title</label>
        <input type="text" name="jobTitle" id="job-title" class="form-control">

            <label class="form-label" for="job-rate">Pay Rate</label>
            <input type="text" name="rate" id="job-rate" class="form-control">

            <label class="form-label" for="job-hours">Hours</label>
            <input type="text" name="hours" id="job-hours" class="form-control">

            <label class="form-label" for="job-description">Job Description</label>
            <input type="textarea" name="description" id="description" class="form-control">

            <label class="form-label" for="job-company">Company</label>
            <input type="text" name="company" id="job-company" class="form-control">

            <button type="submit" class="btn btn-success">Submit</button>

    </form>
  </div>
</div>
</template>


<style lang="scss" scoped>

</style>