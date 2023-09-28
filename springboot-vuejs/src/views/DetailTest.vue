<template>
    <div class="container">
        <header class="jumbotron">
            <h1>
                <strong>{{currentCourse.title}}</strong> details are displayed...
            </h1>
            <h1 class="display-3"> <strong>{{courseId}}</strong></h1>
        </header>

        <div class="transaction-container">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col col-xs-6">
                            <h3 class="panel-title">All Students</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in students" v-bind:key="item.id">
                            <th scope="row">{{index}}</th>
                            <td>{{item}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>
<script>
import courseService from '../services/course.service';
export default {
    name: 'detail-test',
    data() {
        return {
            courseId: null,
            currentCourse: null,
            students: []
        };
    },
    created() {
        this.currentCourse = JSON.parse(localStorage.get('detailCourse'));
        this.courseId = this.$route.params.id;

        courseService.filterStudents(this.courseId).then(students => {
            this.students = students.data;
        })
    }
}
</script>
<style scoped>

</style>