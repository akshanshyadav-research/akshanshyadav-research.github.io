import './globals.css';
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const metadata = {
  metadataBase: new URL('https://akshanshyadav-research.github.io'),
  title: 'Akshansh Yadav | AI & FPGA Researcher',
  description: 'Akshansh Yadav is a Ph.D. researcher at IIT Jodhpur working on efficient Vision Transformers, FPGA accelerators, and hardware–software co-design.',
  icons: { icon: `${base}/favicon.svg` },
  openGraph: { title: 'Akshansh Yadav | AI & FPGA Researcher', description: 'Research, publications, and engineering projects in efficient AI and FPGA acceleration.', type: 'website' },
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
