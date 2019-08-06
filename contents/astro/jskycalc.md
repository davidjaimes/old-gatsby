---
title: JSkyCalc
root: "/astro"
parents: ["Astronomy"]
---
<h1 align="center">
  JSkyCalc
</h1>
<p align="center">A convinient, portable observing aid.</p>

![jskycalc](../../src/images/jskycalc.png)

Skycalc expedites the "time-and-the-sky" calculations needed by observational astronomers. To follow the original directions on setting up JSkyCalc on your computer, go to [John Thorstensen's][2] website. His directions might be a little outdated (from year 2008) but they still work.

## Download jar file
1. Go to [John Thorstensen's][2] website and download the `JSkyCalc.jar` executable jar file.
2. I suggest creating a new folder in your home directory and placing the jar file in there. If your jar file is in your Downloads folder after downloading from John's site, you can copy paste the three commands to your terminal and you should end up in your `jskycalc` directory, under your home folder.
   ```
   mkdir ~/jskycalc
   mv ~/Downloads/JSkyCalc.jar ~/jskycalc
   cd ~/jskycalc
   ```
3. Run the java command on the jar file and it should start right up. If you don't have java installed in your system you will get a messege. Click on "more info" and it will take you to the [Oracle-Java][1] website.  Click on "Oracle JDK Download" button from Java SE 12.0.2 section and then download the `jdk-12.0.2_osx-x64_bin.dmg` file.
   ```
   java -jar JSkyCalc.jar
   ```
![jskycalc-install]

## Customize site menu
4. To add Mount Laguna Observatory to JSkyCalc, start by unpacking the jar file.
   ```
   jar -xvf JSkyCalc.jar
   ```
5. Edit `skycalcsites.dat` to add Mount Laguna Observatory as the first site (above Kitt Peak)--it will become the default.

   ```
   "Mount Laguna Obs.", 7.76173, 32.84, 8., 1, "Pacific", "P", 1859., 1859.
   ```
6. Reconstruct the jar file and all the changes will take effect.
   ```
   jar -cvmf myManifest.mf JSkyCalc.jar .
   ```
![jskycalc-custom]

## Environment setup
7. Add following lines to your `~/.bash_profile` file and you will be able to start JSkyCalc from any directory.

   ```bash
   # use jsky command in any directory to start JSkyCalc
   alias jsky='java JSkyCalc'
   CLASSPATH=$CLASSPATH:~/JSkyCalc
   export CLASSPATH
   ```
8. Finally, use the command `source ~/.bash_profile` to source the file and then use jsky command to start using JSkyCalc from any directory! 
8. The following line is the general format for JSkyCalc (.dat) files:

   ```
   Name_no_blanks hh mm ss dd mm ss equinox +++
   ```

   It's fine if all your stars have equinox=2000. Here is an example of `observe-star.dat` formatted for JSkyCalc.

   ```
   some_star 00 37 52.92 -09 42 16.5 2000.0 +++
   ```

## References
1. [Oracle-Java][1]
2. [JSkyCalc][2]

[1]: https://www.oracle.com/technetwork/java/javase/downloads/index.html
[2]: https://www.dartmouth.edu/~physics/labs/skycalc/flyer.html

[jskycalc-install]: ../../src/images/jskycalc-install.png
[jskycalc-custom]: ../../src/images/jskycalc-custom.png