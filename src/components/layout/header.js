import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo.png';

export default function Header() {
  return (

    <header
      className={`sticky top-0 bg-gray-800 backdrop-blur-lg w-screen shadow-lg h-[8rem] flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex items-center z-[1]">
        <div className="relative flex items-center h-[8rem] w-[32rem]">
          <Link href="/" passhref>
            <a><Image src={logo} alt={info.companyName} layout="fill" objectFit="contain"/></a>
          </Link>
        </div>
      </div>
    </header>

  );
}
