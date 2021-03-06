// DATA
// Below data will hold all of the types of naps.
// Initially we just set it equal to a "dummy" nap.
// But you could have it be an empty array as well.

var newNap = [ {
	"name" : "20min Nap",
	"photo" : "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1511248769000/photosp/ig-213856304189493426_7408155/stock-photo-cat-paw-sofa-nose-whisker-eyes-ears-whiskers-fur-ig-213856304189493426_7408155.jpg",
	"scores" : [5,5,2,3,1,5,2,1,3,5]
}, {
	"name" : "35min Nap",
	"photo" : "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/funny-sleeping-cats-11.jpg",
	"scores" : [1,5,1,1,1,1,1,1,5,5]
}, {
	"name" : "60min Nap",
	"photo" : "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/funny-sleeping-cats-18.jpg",
	"scores" : [5,3,2,3,2,5,1,3,3,4]
}, {
	"name" : "90min Nap",
	"photo" : "https://static.boredpanda.com/blog/wp-content/uploads/2014/01/funny-sleeping-cats-12.jpg",
	"scores" : [5,3,2,3,2,5,1,3,3,4]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = newNap;
