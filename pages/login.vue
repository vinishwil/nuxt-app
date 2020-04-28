<template>
  <v-app id="Login" class="login">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col md="4">
            <v-card v-if="signUp" width="400" class="elevation-12 mx-auto mt-5">
              <v-card-text class="mx-4">
                <div class="text-center">
                  <h2 class="sign-in mb-10">
                    <strong>Sign in</strong>
                  </h2>
                </div>
                <v-text-field
                  label="Email"
                  name="Your email"
                  type="email"
                  autocomplete="off"
                />
                <v-text-field
                  label="Password"
                  type="password"
                  container-class="mb-0"
                />
                <p class="text-small text-sm-right blue--text pb-3">
                  Forgot <a href="#" class="blue--text"> Password?</a>
                </p>
                <div class="text-center mb-3">
                  <v-btn
                    block
                    type="button"
                    gradient="blue"
                    rounded
                    color="primary"
                    class="z-depth-1a"
                    >Sign in</v-btn
                  >
                </div>
                <p
                  class="text-small dark-grey--text d-flex justify-center mb-3 pt-2"
                >
                  or Sign in with:
                </p>
                <div class="row my-3 d-flex justify-center">
                  <v-btn
                    type="button"
                    large
                    light
                    rounded
                    class="ma-3 z-depth-1a"
                    ><v-icon fab class="blue--text text-center"
                      >mdi-facebook</v-icon
                    ></v-btn
                  >
                  <v-btn
                    type="button"
                    large
                    light
                    rounded
                    class="ma-3 z-depth-1a"
                    ><v-icon fab class="blue--text text-center"
                      >mdi-twitter</v-icon
                    ></v-btn
                  >
                  <v-btn
                    type="button"
                    large
                    light
                    rounded
                    class="ma-3 z-depth-1a"
                    ><v-icon fab class="blue--text text-center"
                      >mdi-google-plus</v-icon
                    ></v-btn
                  >
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="mx-5 pt-3 mb-1">
                <p class="text-small grey--text d-flex justify-end">
                  Not a member?
                  <span
                    class="cursor-pointer blue--text ml-1"
                    @click="showSignUp"
                  >
                    Sign Up</span
                  >
                </p>
              </v-card-actions>
            </v-card>
            <v-card v-else width="400" class="elevation-12 mx-auto mt-5">
              <v-card-text class="mx-4">
                <div class="text-center">
                  <h2 class="pink--text mb-10"><strong>Sign up</strong></h2>
                </div>
                <v-text-field label="Your email" type="text" />
                <v-text-field label="Your password" type="password" />
                <v-checkbox
                  id="defaultCheck16"
                  class="my-5 login-checkbox"
                  type="checkbox"
                  label="Accept the Terms and Conditions"
                />
                <v-row class="d-block align-items-center">
                  <v-col class="text-center">
                    <v-btn block dark type="button" color="pink">
                      Sign up
                    </v-btn>
                  </v-col>
                  <v-col>
                    <p class="font-small grey--text d-flex justify-end">
                      Have an account?
                      <span
                        class="blue--text ml-1 cursor-pointer"
                        @click="showSignIn"
                      >
                        Log in</span
                      >
                    </p>
                  </v-col>
                </v-row>
              </v-card-text>
              <div class="footer pt-3 grey lighten-1">
                <v-row class="d-flex justify-center">
                  <p class="font-small white--text mb-2 pt-3">
                    or Sign up with:
                  </p>
                </v-row>
                <v-row class="mt-2 mb-3 d-flex justify-center">
                  <a class="pa-2 ma-2"
                    ><v-icon class="white--text icon-size"
                      >mdi-facebook</v-icon
                    ></a
                  >
                  <a class="pa-2 ma-2"
                    ><v-icon class="white--text icon-size"
                      >mdi-twitter</v-icon
                    ></a
                  >
                  <a class="pa-2 ma-2"
                    ><v-icon class="white--text icon-size"
                      >mdi-google-plus</v-icon
                    ></a
                  >
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {},
  // eslint-disable-next-line prettier/prettier
  data () {
    return {
      signUp: true
    }
  },
  layout: 'loginLayout',
  methods: {
    // eslint-disable-next-line prettier/prettier
    showSignUp () {
      this.signUp = false
    },
    // eslint-disable-next-line prettier/prettier
    showSignIn () {
      this.signUp = true
    }
  }
}
</script>
<style scoped>
main {
  background-image: url('../assets/bg8.jpg');
  background-size: cover;
}
.form-elegant .font-small {
  font-size: 0.8rem;
}

.form-elegant .z-depth-1a {
  -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
    0 4px 12px 0 rgba(121, 155, 254, 0.25);
  box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
    0 4px 12px 0 rgba(121, 155, 254, 0.25);
}

.form-elegant .z-depth-1-half,
.form-elegant .btn:hover {
  -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
    0 4px 15px 0 rgba(36, 133, 255, 0.15);
  box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
    0 4px 15px 0 rgba(36, 133, 255, 0.15);
}
.sign-in {
  color: #4f4f4f !important;
}
.v-card__text {
  width: unset;
}
a {
  text-decoration: none;
}
.login .text-small {
  font-size: 0.8rem !important;
  text-align: right !important;
}
.login-checkbox >>> .v-label {
  font-size: small;
}
.cursor-pointer {
  cursor: pointer;
}
.icon-size {
  font-size: 2.33333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}
</style>
