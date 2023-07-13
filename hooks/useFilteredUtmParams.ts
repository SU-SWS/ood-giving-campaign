// TODO: GIVCAMP-164

// import { useRouter } from 'next/router';

// /**
//  * @returns A string with a selected set of query params from the current page's URL
//  */
// export const useFilteredUtmParams = () => {
//   const paramsToKeep = [
//     'utm_source',
//     'utm_medium',
//     'utm_campaign',
//     'utm_term',
//     'utm_content',
//   ];
//   // Get the query params from the current page's URL
//   const { query } = useRouter();
//   const queryParams = new URLSearchParams(query);
//   const filteredParams = {};

//   queryParams.forEach((value, param) => {
//     if (paramsToKeep.includes(param)) {
//       filteredParams[param] = value;
//     }
//   });

//   const newQueryParams = new URLSearchParams(filteredParams).toString();

//   return newQueryParams;
// };
