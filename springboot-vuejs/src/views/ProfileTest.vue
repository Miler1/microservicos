<template>
    <div class="container">
        <header class="jumbotron">
            <h1>
                <strong>{{currentUser.name}}</strong> Welcome to my app.
            </h1>
        </header>
        <a class="btn btn-link log-out" @click="logOut" >LogOut</a>

        <div class="transaction-container">
            <div class="card">
                <div class="card-header">
                    <div class="col col-xs-6">
                        <h3 class="panel-title">All Transactions</h3>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date of Issue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in transaction" v-bind:key="item.id">
                            <th scope="row">{{index}}</th>
                            <td>{{item.course.title}}</td>
                            <td>{{item.course.author}}</td>
                            <td>{{item.course.category}}</td>
                            <td>{{item.dateOfIssue}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>
<script>
import UserService from '../services/user.service';
import CourseService from '../services/course.service';
export default {
    name: 'profile-test',
    data() {
        return {
            currentUser: null,
            transactions: []
        };
    },
    created() {
        this.currentUser = UserService.currentUserValue;
        if(!this.currentUser){
            this.$router.push('/login');
        }
        CourseService.filterTransactions(this.currentUser.id).then(trans => {
            this.transactions = trans.data;
        });
    },
    methods: {
        logOut() {
            UserService.logOut().then(() => {
                this.$router.push('/login');
            });
        }
    }
}
</script>
<style scoped>

</style>