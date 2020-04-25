const apiKey = 'xcy84JxMyFVkCdSZge4XghfYzNMXleFwg7y5nVnb8lAlSeY88AWDK--UxMSe4bLfc93MX192gsjOmgc57JR12wNC9oGsDSK1E71j6Wl95qHVzaA8iofLIus5D_aiXnYx';

export const yelp = {
  createBusiness(business) {
    return {
      id: business.id,
      imageSrc: business.image_url,
      name: business.name,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zipCode: business.zip_code,
      category: business.categories[0].title,
      rating: business.rating,
      reviewCount: business.review_count
    };
  },

  // search(term, location, sortBy) {
  //   let endPoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;


  //   return fetch(endPoint, { headers: { 'Authorization': `Bearer ${apiKey}` } }
  //   )
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error('Request failed!');
  //     }, (networkError) => console.log(networkError.message))
  //     .then(jsonResponse => {
  //       console.log(jsonResponse);
  //       if (Object.keys(jsonResponse).indexOf('businesses') >= 0) {
  //         return jsonResponse.businesses.map(business => {
  //           return this.createBusiness(business);
  //         });
  //       }
  //       else {
  //         throw new Error('No Business property found!');
  //       }
  //     })
  //     .catch(error => console.log(error));
  // },

  async search(term, location, sortBy) {
    let endPoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    try {
      let response = await fetch(endPoint, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
      if (response.ok) {
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        if (Object.keys(jsonResponse).indexOf('businesses') >= 0) {
          return jsonResponse.businesses.map(business => {
            return this.createBusiness(business);
          });
        }
        throw new Error('No Business property found!');
      }

    } catch (error) {
      console.log(error.message);
    }
  }


};

