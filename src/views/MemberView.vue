<template>
  <div>Header</div>
  <div>
    <v-table height="300px">
      <thead>
        <tr>
          <th class="text-left">Member Code</th>
          <th class="text-left">Name</th>
          <th class="text-left">Bank Name</th>
          <th class="text-left">Bank Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in this.members" :key="member.member_id">
          <td>{{ member.member_id }}</td>
          <td>{{ getFullName(member.first_name, member.last_name) }}</td>
          <td>{{ member.bank_name }}</td>
          <td>{{ member.bank_number }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import MemberService from "../api/member.service";
export default {
  data() {
    return {
      members: [],
    };
  },
  created() {
    this.getMembers();
  },
  methods: {
    getMembers() {
      MemberService.getAll().then((data) => {
        this.members = data;
      });
    },
    getFullName(firstName, lastName) {
      return `${firstName} ${lastName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.member-header {
  text-align: center;
}

.member {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>
