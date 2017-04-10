import Trainings from './components/Trainings.vue'
import Workout from './components/Workout.vue'
import Summary from './components/Summary.vue'

export const routes = [
  { path: '', component: Trainings },
  { path: '/workout', name: 'workout', component: Workout },
  { path: '/summary', component: Summary },
  { path: '/summary/:id', component: Summary }
]
