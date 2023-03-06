<template lang="">
    <div class="container">
        <Header> </Header>
        <div class="form-login">
            <form action="">
                <h2>Login</h2>
                <div class="form-item form-email">
                    <span>Email</span>
                    <input v-model="state.email" type="text" >
                </div>
                <div class="form-item form-password ">
                    <span>Password</span>
                    <input v-model="state.password" type="password" >
                </div>
            </form>
            <button  @click="submitForm">Login</button>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
export default {
    components: {
        Header
    },
    setup() {
        const state = reactive({
            email: '',
            password: '',
        })
        const rules = computed(() => {
            return {
                email: { required, email },
                password: { required, minLength: minLength(6) }
            }
        })

        const v$ = useVuelidate(rules, state)
        console.log('$v :>> ', v$);
        return { state, v$ }
    },
    methods: {
        submitForm() {
            this.v$.$validate()
            console.log('this.$v :>> ', this.v$);
            if (!this.v$.$error) {
                alert("Login successful!");
            }
            else {
                alert("Login failed!");
            }
        }
    }
}
</script>

<style lang="scss">
.container {
    height: 100vh;
}

.form-login {
    form {
        input {
            text-decoration: none;
            outline: auto;
            padding: 5px 8px;
        }

        span {
            margin-right: 10px;
        }

        .form-item {
            margin: 10px
        }
    }

    bottom {
        border: 1px solid;
        background-color: aquamarine;
        color: #333;
        border-radius: 2px
    }
}
</style>