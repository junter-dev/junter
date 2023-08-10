import { parseParams } from './parseParams'

describe('parseParams Func', () => {
  it('it should return object with content and props field', () => {
    expect(
      parseParams({
        props: { src: 'https://example.com' },
        content: 'Example site',
      })
    ).toMatchObject({
      props: { src: 'https://example.com' },
      content: 'Example site',
    })

    expect(parseParams(['Hi!', 'Hello!'])).toMatchObject({
      props: null,
      content: expect.arrayContaining([
        expect.objectContaining({ props: null, content: 'Hi!' }),
        expect.objectContaining({ props: null, content: 'Hello!' }),
      ]),
    })

    expect(
      parseParams({
        props: { src: 'https://example.com' },
        content: ['Hi!', 'Hello!'],
      })
    ).toMatchObject({
      props: { src: 'https://example.com' },
      content: expect.arrayContaining([
        expect.objectContaining({ props: null, content: 'Hi!' }),
        expect.objectContaining({ props: null, content: 'Hello!' }),
      ]),
    })

    expect(
      parseParams({
        props: { src: 'https://example.com' },
        content: [
          { props: { class: 'string ' }, content: 'Hi!' },
          { props: { class: 'test' }, content: 'Hello!' },
        ],
      })
    ).toMatchObject({
      props: { src: 'https://example.com' },
      content: expect.arrayContaining([
        expect.objectContaining({
          props: { class: 'string ' },
          content: 'Hi!',
        }),
        expect.objectContaining({
          props: { class: 'test' },
          content: 'Hello!',
        }),
      ]),
    })

    expect(parseParams('Hello!')).toMatchObject({
      props: null,
      content: 'Hello!',
    })

    expect(
      parseParams({ props: { src: 'https://example.com' }, span: 'Test!' })
    ).toMatchObject({
      props: { src: 'https://example.com' },
      content: {
        span: 'Test!',
      },
    })

    expect(parseParams()).toMatchObject({
      props: undefined,
      content: {},
    })
  })
})
