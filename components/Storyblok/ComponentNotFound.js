const ComponentNotFound = ({ component: { blok } }) => (
  <div className='rs-p-6 bg-red-600'><h2 className='text-white'>{blok.component} component is missing from the codebase.</h2><p className='text-white'>Source blok UID: {blok._uid}</p></div>
);

export default ComponentNotFound;
