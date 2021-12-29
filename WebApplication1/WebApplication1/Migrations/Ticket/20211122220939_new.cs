using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations.Ticket
{
    public partial class @new : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "dessert",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nom = table.Column<string>(nullable: true),
                    image = table.Column<string>(nullable: true),
                    prix = table.Column<float>(nullable: false),
                    description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dessert", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "drinks",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nom = table.Column<string>(nullable: true),
                    image = table.Column<string>(nullable: true),
                    prix = table.Column<float>(nullable: false),
                    description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_drinks", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Plats",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nom = table.Column<string>(nullable: true),
                    prix = table.Column<float>(nullable: false),
                    image = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plats", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Ticket",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NameT = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    DateT = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    customer = table.Column<string>(nullable: true),
                    Agent = table.Column<string>(nullable: true),
                    ImageName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ticket", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "commande",
                columns: table => new
                {
                    idCommande = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomUser = table.Column<string>(nullable: true),
                    dateCommande = table.Column<string>(nullable: true),
                    phoneNumber = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    platsId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_commande", x => x.idCommande);
                    table.ForeignKey(
                        name: "FK_commande_Plats_platsId",
                        column: x => x.platsId,
                        principalTable: "Plats",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_commande_platsId",
                table: "commande",
                column: "platsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "commande");

            migrationBuilder.DropTable(
                name: "dessert");

            migrationBuilder.DropTable(
                name: "drinks");

            migrationBuilder.DropTable(
                name: "Ticket");

            migrationBuilder.DropTable(
                name: "Plats");
        }
    }
}
