export function usePreviousStep() {
  if (typeof window !== 'undefined') {
    // @ts-expect-error
    const history = navigation.entries();
    const previousStep = history[history.length - 2];

    const url = new URL(previousStep?.url);
    return url.href.replace(url.origin, '');
  }

  return '';
}
