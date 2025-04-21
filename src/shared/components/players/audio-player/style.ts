import { CSSProperties } from 'react';

const customAudioPlayerStyles: { [key: string]: CSSProperties } = {
    container: {
        width: '100%',
        boxShadow: 'none',
        color: 'var(--color-player-text)',
    },
    progressBar: {
        backgroundColor: 'var(--color-player-progress)', // Progress bar color
    },
};
export {customAudioPlayerStyles};