import * as firebase from 'firebase/app'
import { getUserFromCookie } from '@/utils/tokenParser.js'
import 'firebase/auth'
export default function({ req, redirect }) {
  if (process.server) {
    const user = getUserFromCookie(req)
    if (!user) {
      redirect('/login')
    }
  } else {
    const user = firebase.auth().currentUser
    if (!user) {
      redirect('/login')
    }
  }
}
