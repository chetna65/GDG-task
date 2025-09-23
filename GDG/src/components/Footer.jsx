export default function Footer() {
  return (
    // The main footer container. 'relative' is used for the decorative pattern at the bottom.
    <footer className="relative bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-16">
      
      {/* Main content container with padding and centered layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        
        {/* Grid layout for the three columns. Stacks on mobile, goes side-by-side on medium screens and up. */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: GDG Info */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/gdg-logo.png" alt="Google Developer Groups Logo" className="h-8 mb-4" />
            <p className="font-bold text-lg">Google Developer Groups</p>
            <p className="text-sm text-gray-500">
              <a href="#" className="text-blue-600 hover:underline">On Campus</a>
              <span> • </span>
              <span>Ramdeobaba University</span>
            </p>
          </div>
          
          {/* Column 2: Contact Info with a vertical divider on desktop */}
          <div className="flex flex-col items-center md:items-start gap-4 md:border-l md:border-gray-300 dark:md:border-gray-600 md:pl-8">
            <div className="flex items-start gap-3">
              <img src="/location.png" alt="Location icon" className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>
                Shri Ramdeobaba College of Engineering and Management,
                Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src="/mail.png" alt="Email icon" className="w-5 h-5 mt-1 flex-shrink-0" />
              <a href="mailto:dsc.rknec@gmail.com" className="hover:underline">dsc.rknec@gmail.com</a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start md:pl-8">
            <p className="font-semibold mb-3">Follow Us:</p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="h-10 w-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="h-10 w-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-repeat-x" style={{ backgroundImage: "url('/footer.png')" }} ></div>
      <br></br><br></br><br></br>
    </footer>
  );
}