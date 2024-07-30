const { option } = require("grunt");

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style:'compressed'
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        },
        uglify: {
            target:{
                files: {'./dist/script/main.mim.js' : './src/scripts/main.js'
                    
                }
            }
        },
        replace:{
            dev:{
                option:{
                    patternes:[
                        {
                            march: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            }
        }
    })







    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace')

    grunt.registerTask('default', ['less:development', 'sass', 'uglify']);
    grunt.registerTask('build',['less:production', 'uglify'])

}