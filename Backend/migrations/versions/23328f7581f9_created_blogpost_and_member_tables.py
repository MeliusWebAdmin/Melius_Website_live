"""created blogpost and member tables

Revision ID: 23328f7581f9
Revises: ca3aa50ac00b
Create Date: 2023-10-06 21:49:28.452153

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '23328f7581f9'
down_revision = 'ca3aa50ac00b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('contact_us',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('created_on', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('contact_us')
    # ### end Alembic commands ###
