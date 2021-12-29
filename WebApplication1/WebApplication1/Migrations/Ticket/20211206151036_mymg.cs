using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations.Ticket
{
    public partial class mymg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "platName",
                table: "commande",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "platName",
                table: "commande");
        }
    }
}
