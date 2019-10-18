import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * MyApp
 */
public class MyApp {

    private static String sql = "SELECT * FROM mydb.users;";

    public static void main(String[] args) {
        Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
        Connection connection = DriverManager.getConnection("jdbc://localhost:3306", "root", "password");
        String sql = "SELECT username FROM mydb.users WHERE user_id = ?;";
        PreparedStatement preparedStatement = connection.prepareStatement(sql);
        preparedStatement.setInt(1, 102);
        ResultSet rs = preparedStatement.executeQuery();
        while (rs.next()) {
            System.out.println("Username of user_id: " + 102 + " is: " + rs.getString("username"));
        }
    }
}
