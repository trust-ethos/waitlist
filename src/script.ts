import * as amplitude from '@amplitude/analytics-browser';

const apiKey = process.env.AMPLITUDE_API_KEY ?? 'd8e9e6064066bfd2405cfce189c578c6';

amplitude.init(apiKey, {
  defaultTracking: true,
});

document.getElementById('open-waitlist')?.addEventListener('click', () => {
  amplitude.track('button clicked', {
    button: 'open-waitlist',
    '[Amplitude] Page Domain': window.location.hostname,
  });
})
