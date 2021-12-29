using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations.Ticket
{
    public partial class m100 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "livraison",
                columns: table => new
                {
                    idLivraison = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomUser = table.Column<string>(nullable: true),
                    adresse = table.Column<string>(nullable: true),
                    dateCommande = table.Column<string>(nullable: true),
                    phoneNumber = table.Column<string>(nullable: true),
                    platName = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    platsId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_livraison", x => x.idLivraison);
                    table.ForeignKey(
                        name: "FK_livraison_Plats_platsId",
                        column: x => x.platsId,
                        principalTable: "Plats",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_livraison_platsId",
                table: "livraison",
                column: "platsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "livraison");
        }
    }
}
