import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Button from '~/components/button';

export default component$(() => {
  const count = useSignal(0)

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p>{count.value}</p>
      <Button label={'click me'} onClick$={() => {
        count.value++;
      }} />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik app',
  meta: [
    {
      name: 'description',
      content: 'Qwik app site',
    },
  ],
};
