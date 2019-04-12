import { Selector } from 'testcafe'
import axeCheck from 'axe-testcafe'

fixture('Button')
  .page('http://localhost:6006/iframe.html?id=button--with-text')

test('has text', async t => {
  const button = Selector('button')
  await t.expect(button.textContent).contains('Some text')
})

test('changes text when clicked', async t => {
  await t
    .click(Selector('[data-testid=btn-id]'))
    .expect(Selector('[data-testid=btn-id]').textContent)
    .contains('You clicked me')
})

test('passes accessibility', async t => {
    await axeCheck(t, '#root')
})