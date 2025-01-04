export default function Footer () {
  return (
   <footer className="flex justify-center text-center pt-2 p-1 bg-sky-500 text-slate-50 left-0	bottom-0 w-full	fixed">
     <p>
        <a
          href="https://elielsondev.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elielson Nascimento © {new Date().getFullYear()} - All rights reserved.
        </a>
      </p>
   </footer> 
  );
};