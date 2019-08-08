<template>
    <div>
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your Username" key="username-input">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address"  key="email-input">
        </template>
            <router-view/>
    </div>
</template>

<script>
export default {
    name: 'test'
}
</script>