import { addAliases } from './addAliases'

describe('add aliaces', () => {
  it('slot alias', () => {
    const newObject = addAliases(
      {
        div: {
          p: 'Hello!',
          div: 'slot:block',
        },
      },
      { replacer: { 'slot:block': 'Just a text' } }
    )

    expect(newObject).toEqual({
      div: {
        p: 'Hello!',
        div: 'Just a text',
      },
    })
  })

  it('style alias', () => {
    const css = `.target { color: red }`

    const newObject = addAliases(
      {
        form: {
          style: 'style:mainCSS',
        },
      },
      { replacer: { 'style:mainCSS': css } }
    )

    expect(newObject).toEqual({
      form: {
        style: css,
      },
    })
  })
})
