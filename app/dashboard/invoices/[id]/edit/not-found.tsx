import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';


 
// export default function NotFound() {
//   return (
//     <main className="flex h-full flex-col items-center justify-center gap-2">
//       <FaceFrownIcon className="w-10 text-gray-400" />
//       <h2 className="text-xl font-semibold">404 Not Found</h2>
//       <p>Could not find the requested invoice.</p>
//       <Link
//         href="/dashboard/invoices"
//         className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
//       >
//         Go Back
//       </Link>
//     </main>
//   );
// }

export default function NotFound(){
  return(
    <main className='flex h-full flex-col items-center justify-center '>
      <FaceFrownIcon className='w-20 text-red-400' />
      <h1 className="text-xl font-semibold">404 Not Found</h1>
      <p>Could not find the requested invoice.</p>
    <Link href="/dashboard/invoices" className="mt-4 rounded-md bg-blue-500 px-6 py-4 text-sm text-white transition-colors hover:bg-blue-400">
      Invoice Not Found Go Back
    </Link>
    </main>
  )

}