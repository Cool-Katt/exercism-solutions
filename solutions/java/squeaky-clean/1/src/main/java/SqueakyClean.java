import java.util.regex.Pattern;

class SqueakyClean {
    static String clean(String identifier) {
        identifier = identifier.replaceAll(" ", "_").replaceAll("\\p{Cntrl}", "CTRL");
        String camel = Pattern.compile("-([\\p{L}])").matcher(identifier).replaceAll(mr -> mr.group(1).toUpperCase());
        identifier = camel.replaceAll("-", "").replaceAll("[0-9]", "").replaceAll("[^\\p{L}_]","").replaceAll("[α-ω]","");
        return identifier;
    }
}
