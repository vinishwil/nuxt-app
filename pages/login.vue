<template>
  <v-app id="inspire">
    <!-- <img alt="Vue logo" src="../assets/bg.jpg" class="backgroundImage" /> -->
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col>
            <v-card width="400" class="elevation-12 mx-auto mt-5">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>My App</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text class="pr-8">
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    outlined
                    rounded
                    dense
                    class="pt-4"
                    autocomplete="off"
                  />
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    outlined
                    rounded
                    dense
                  />
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer />
                <v-btn color="success" rounded>Sign Up</v-btn>
                <v-btn color="primary" rounded>Sign In</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  layout: 'loginLayout',
  props: {}
}
</script>
<style scoped>
main {
  background-image: url('../assets/bg5.jpg');
  background-size: cover;
  /* background-color: lightslategrey; */
}
</style>
