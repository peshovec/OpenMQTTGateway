from os.path import join, isfile

Import("env")

###FRAMEWORK_DIR = env.PioPlatform().get_package_dir("framework-arduinoavr")
##LIBRARY_DIR = env.PioPlatform().get_package_dir("rtl_433_ESP")
LIBDEPS_DIR = env['PROJECT_LIBDEPS_DIR']
LIBRARY_DIR = "/home/july/works/gits/OpenMQTTGateway/.pio/libdeps/esp32-rfallrtl/rtl_433_ESP"
##LIBRARY_DIR = join(LIBDEPS_DIR, "rtl_433_ESP")
patchflag_path = join(LIBRARY_DIR, ".patching-done")

# patch file only if we didn't do it before
if not isfile(join(LIBRARY_DIR, ".patching-done")):
    #original_file = join(LIBRARY_DIR, "variants", "standard", "pins_arduino.h")
    patched_file = join("/home/july/", "openmqtt-rtl-rename-nexus-silvercrest.patch")
    patched_filetoo = join("/home/july/", "openmqtt-rtl-use-radiolib-710.patch")
    print(patched_file)
    print(patched_filetoo)
    assert isfile(patched_file) and isfile(patched_filetoo)

    env.Execute("patch %s %s %s %s %s" % ("-d", LIBRARY_DIR,  "-p1", "-i", patched_file))
    env.Execute("patch %s %s %s %s %s" % ("-d", LIBRARY_DIR,  "-p1", "-i", patched_filetoo))
    env.Execute("touch " + patchflag_path)


