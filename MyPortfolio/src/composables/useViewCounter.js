import { ref, onMounted, h } from 'vue';
import axios from 'axios';

export function useViewCounter() {
    const viewCount = ref(0);
    const isLoading = ref(true);

    const incrementView = async () => {
        try {
            // Increment the counter on CountAPI (create a unique namespace for your site)
            const response = await axios.get('https://api.countapi.xyz/hit/myportfolio-visits/unique');
            viewCount.value = response.data.value;
        } catch (error) {
            console.error('Error incrementing view count:', error);
            // Fallback: try to get current count without incrementing
            try {
                const response = await axios.get('https://api.countapi.xyz/get/myportfolio-visits/unique');
                viewCount.value = response.data.value;
            } catch (fallbackError) {
                console.error('Error fetching view count:', fallbackError);
                viewCount.value = 0;
            }
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(() => {
        incrementView();
    });

    return {
        viewCount,
        isLoading,
        incrementView
    };
}

// Simple emoji glyph (easy to insert in text)
export const EyeGlyph = '👁️';

// Lightweight render-function eye icon (monochrome, small)
export const EyeIcon = (props = {}) => {
    const size = props.size || 18;
    const cls = props.class || props.className || '';
    return h(
        'svg',
        {
            width: size,
            height: size,
            viewBox: '0 0 24 24',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            class: cls,
            'aria-hidden': 'true',
            role: 'img'
        },
        [
            h('path', {
                d: 'M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z',
                stroke: 'currentColor',
                'stroke-width': '1.6',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                fill: 'none'
            }),
            h('circle', {
                cx: '12',
                cy: '12',
                r: '3',
                fill: 'currentColor'
            })
        ]
    );
};

// Fancy eye with subtle gradient (use where you want a colorful symbol)
export const FancyEye = (props = {}) => {
    const size = props.size || 20;
    const cls = props.class || props.className || '';
    return h(
        'svg',
        {
            width: size,
            height: size,
            viewBox: '0 0 48 48',
            xmlns: 'http://www.w3.org/2000/svg',
            class: cls,
            'aria-hidden': 'true',
            role: 'img'
        },
        [
            // defs with gradient
            h('defs', {}, [
                h('linearGradient', { id: 'g1', x1: '0%', y1: '0%', x2: '100%', y2: '100%' }, [
                    h('stop', { offset: '0%', 'stop-color': '#ff6aa3' }),
                    h('stop', { offset: '60%', 'stop-color': '#ff2fa3' }),
                    h('stop', { offset: '100%', 'stop-color': '#8b5cf6' })
                ])
            ]),
            // outer eye shape
            h('path', {
                d: 'M4 24s6-12 20-12 20 12 20 12-6 12-20 12S4 24 4 24z',
                fill: 'url(#g1)',
                opacity: '0.95'
            }),
            // white inner highlight
            h('path', {
                d: 'M14 24c0-5 4-9 10-9s10 4 10 9-4 9-10 9-10-4-10-9z',
                fill: 'rgba(255,255,255,0.08)'
            }),
            // pupil
            h('circle', {
                cx: '24',
                cy: '24',
                r: '6',
                fill: '#0f172a'
            }),
            // small sparkle
            h('circle', {
                cx: '20.5',
                cy: '20',
                r: '1.2',
                fill: 'white',
                opacity: '0.9'
            })
        ]
    );
};

// Helper to format label with a glyph or eye component
export function eyeLabel(count, useGlyph = true) {
    const n = Number(count) || 0;
    const suffix = n === 1 ? 'view' : 'views';
    return useGlyph ? `${n} ${suffix} ${EyeGlyph}` : `${n} ${suffix}`;
}
