using Microsoft.EntityFrameworkCore.Migrations;

namespace dataFxBackend.Migrations
{
    public partial class _10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "hogwarts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(maxLength: 20, nullable: true),
                    Apellido = table.Column<string>(maxLength: 20, nullable: true),
                    Identificacion = table.Column<int>(maxLength: 10, nullable: false),
                    Edad = table.Column<int>(maxLength: 2, nullable: false),
                    Casa = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_hogwarts", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "hogwarts");
        }
    }
}
