var gulp = require('gulp'), watch = require('gulp-watch');


gulp.task('default',function(){
  console.log("Hoory you have create gulp taks");
});

gulp.task('html',function(){
	console.log("change made in html files");
	});
	
gulp.task('style',function(){
	console.log("change made in css file");
	});

gulp.task('watch',function(){
	
	  watch('./app/index.html' ,function(){
	    gulp.start('html');
	});
	
	watch('./app/assets/style/**/*.css', function(){
		gulp.start('style');
		});
	
});
