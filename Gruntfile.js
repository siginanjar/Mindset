module.exports = function(grunt) {

	grunt.registerTask('mwatch', ['watch']);

	grunt.initConfig({

		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: [
					'javascript/*.js'
				],
				dest: 'theme/js/main.min.js'
			},
		},

		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'theme/js/main.min.js': ['theme/js/main.min.js']
				}
			}
		},

		less: {
			style: {
				files: {
					"theme/css/template.css": "theme/less/template.less",
					"theme/css/header.css": "theme/less/header.less",
					"theme/css/body.css": "theme/less/body.less",
					"theme/css/footer.css": "theme/less/footer.less"
				}
			}
		},

		watch: {
			js: {
				files: ['javascript/*.js'],
				tasks: ['concat:js', 'uglify:js'],
				options: {
					livereload: true,
				}
			},
			css: {
				files: ['theme/less/*.less'],
				tasks: ['less:style'],
				options: {
					livereload: true,
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

};