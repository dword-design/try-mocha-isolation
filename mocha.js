it('1', () => {
  if (global['mocha-isolation']) {
    console.log('running in isolation.');
  }
  console.log(require('.'))
})

it('2', () => console.log(require('.')))
