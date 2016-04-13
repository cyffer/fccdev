module.export = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch:{
			options:{livereload:true},
			files: ['.', 'portfoliopage.html'],
			tasks: []
		},
		express:{
			  all:{
			  	   options:{
			  	   	port:9000,
			  	   	hostname:'localhost',
			  	   	bases:'public',
			  	   	livereload:true,
			  	   	debug:true
			  	   }
					}
			}
	});

  grunt.loadNmpTasks('grunt.contrib-watch');
  grunt.loadNmpTasks('grunt-epress');
  grunt.registerTask('server',['express','express-keeplive']);
};