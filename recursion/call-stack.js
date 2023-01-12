function takeShower() {
  return 'Showering!'
}

function eatBreakfast() {
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood() {
  let items = ['oatmeal', 'eggs', 'protein shake']
  return items[Math.floor(Math.random()*items.length)]
}

function wakeUp() {
  takeShower()
  eatBreakfast()
  console.log('ok ready to go to work!')
}

wakeUp()